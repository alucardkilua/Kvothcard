import { authenticateUser } from "../services/auth.service.js";

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await authenticateUser(email, password);

    if (!user) {
      return res.status(401).json({
        seccess: false,
        message: "Credenciais inválidas.",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }
}
