function calcularPopina() {
  let totalCuenta = document.getElementById('totalCuenta').value;
  let propina = document.getElementById('propina').value;
  let porcentaje = Number(totalCuenta) * (Number(propina) / 100);
  console.log(porcentaje);

  let totalFinal = Number(totalCuenta) + Number(porcentaje);

  document.getElementById('cuenta').innerHTML = `$ ${totalCuenta}`;
  document.getElementById('prop').innerHTML = `$ ${porcentaje}`;
  document.getElementById('totalFinal').innerHTML = `$ ${totalFinal}`;
}
