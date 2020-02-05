package br.org.generation.ClickIn.security;


import javax.xml.bind.DatatypeConverter;

import br.org.generation.ClickIn.model.Usuario;


public class Autenticador {
	// Prefixo inicial do nosso token
	private static final String PREFIXO = "*CLICKIN;";

	public static String generateToken(Usuario usuario) {
		// concatena o prefixo com as informações do usuario;
		String str = PREFIXO + usuario.toString();
		// converte para hexadecial

		String token = DatatypeConverter.printHexBinary(str.getBytes());
		return token;
	}

	public static boolean isValid(String token) {
		byte[] vetor = DatatypeConverter.parseHexBinary(token);
		// converte o código hexadecimal de volta para texto
		String novaString = new String(vetor);
		if (novaString.startsWith(PREFIXO)) {
			return true;
		}
		return false;
	}

	public static Usuario getUser(String token) {

		byte[] vetor = DatatypeConverter.parseHexBinary(token);
		// converte o código hexadecimal de volta para texto
		String novaString = new String(vetor);
		String partes[] = novaString.split(";");

		Usuario c = new Usuario();
		c.setIdUsuario(Integer.parseInt(partes[1]));
		c.setNome(partes[2]);
		c.setEmail(partes[3]);
		return c;
	}
}