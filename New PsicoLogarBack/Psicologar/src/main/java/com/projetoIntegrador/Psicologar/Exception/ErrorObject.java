package com.projetoIntegrador.Psicologar.Exception;

public class ErrorObject {

	public ErrorObject(String defaultMessage, String field2, Object rejectedValue) {

	}

	private String message;
	private String field;
	private Object parameter;

	public ErrorObject() {
		super();
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public Object getParameter() {
		return parameter;
	}

	public void setParameter(Object parameter) {
		this.parameter = parameter;
	}
}
