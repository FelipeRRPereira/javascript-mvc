class DataHelper {
  constructor() {
    throw new Error("Está classe não pode ser instanciada.");
  }

  static textoParaData(texto) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
      throw new Error("Data deve estar no formado YYYY-MM-DD.");

    return new Date(...texto.split("-").map((item, i) => item - (i % 2)));
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}
