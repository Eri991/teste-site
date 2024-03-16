const db = require("../config/db.config.js");
const Cliente = db.Cliente;
exports.createCliente = (req, res) => {
  let cliente = {};
  try {
    // Building Customer object from upoading request's body
    cliente.nome = req.body.nome;
    cliente.idade = req.body.idade;
    cliente.email = req.body.email;
    cliente.is_deleted = "0";

    // Save to MySQL database
    Cliente.create(cliente, {
      attributes: ["id", "nome", "idade", "email", "is_deleted"],
    }).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail!",
      error: error.message,
    });
  }
};


exports.getCliente = async (req, res) => {
  let clienteCount = await Cliente.count()
  if (req.params.id <= clienteCount && req.params.id > 0) {
    Cliente.findByPk(req.params.id, {
      attributes: ["id", "nome", "idade", "email", "is_deleted"],
    })
      .then((cliente) => {
        if (!cliente.is_deleted) {
          res.status(200).json(cliente);
        } else {
          res.status(404).json({
            message: "Does Not exist a Customer with id = " + req.params.id,
            error: 404,
          });
        }
      })
      .catch((error) => {
        // log on console
        console.log(error);
        res.status(500).json({
          message: "Error!",
          error: error,
        });
      });
  }
  else {
    res.status(404).json({
      message: "Does Not exist a Customer with id = " + req.params.id,
      error: 404
    })
  }
};


exports.clientes = (req, res) => {
  // find all Customer information from
  try {
    Cliente.findAll({
      attributes: ["id", "nome", "idade", "email"],
      where: { is_deleted: "0" },
    }).then((clientes) => {
      res.status(200).json(clientes);
    });
  } catch (error) {
    // log on console
    console.log(error);
    res.status(500).json({
      message: "Error!",
      error: error,
    });
  }
};


exports.deleteCliente = async (req, res) => {
  try {
    let clienteId = req.params.id;
    let cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      res.status(404).json({
        message: "Does Not exist a Customer with id = " + clienteId,
        error: "404",
      });
    } else {
      await Cliente.update(
        {
          nome: cliente.nome,
          idade: cliente.idade,
          email: cliente.email,
          is_deleted: "1",
        },
        {
          returning: true,
          where: { id: clienteId },
          attributes: ["id", "nome", "idade", "email"],
        }
      );

      res.status(200).json("cliente deletado com sucesso.");
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> Can NOT delete a customer with id = " + req.params.id,
      error: error.message,
    });
  }
};


exports.updateCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findByPk(req.body.id);

    if (!cliente) {
      // return a response to client
      res.status(404).json({
        message: "Not Found for updating a customer with id = " + clienteId,
        error: "404",
      });
    } else {
      // update new change to database
      let updatedObject = {
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        is_deleted: "0",
      };
      let result = await Cliente.update(updatedObject, {
        returning: true,
        where: { id: req.body.id },
        attributes: ["id", "nome", "idade", "email"],
      });
      // return the response to client
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a customer with id = " + req.params.id,
          error: "Can NOT Updated",
        });
      }
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> Can not update a customer with id = " + req.params.id,
      error: error.message,
    });
  }
};


