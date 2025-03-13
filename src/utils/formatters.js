// Formata o CEP para o padrão 00000-000
export function formatCEP(value) {
  let cep = value.replace(/\D/g, "");
  if (cep.length > 8) {
    cep = cep.slice(0, 8);
  }
  if (cep.length > 5) {
    return cep.slice(0, 5) + "-" + cep.slice(5);
  }
  return cep;
}

export function formatCPF(value) {
    let cpf = value.replace(/\D/g, ''); // remove tudo que não é dígito
    cpf = cpf.slice(0, 11); // limita a 11 dígitos
    cpf = cpf.replace(/^(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    cpf = cpf.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return cpf;
  }
  
  // Formata a data de nascimento para o padrão DD/MM/AAAA
  export function formatDate(value) {
    let date = value.replace(/\D/g, '');
    date = date.slice(0, 8); // limita a 8 dígitos (DDMMYYYY)
    if (date.length >= 5) {
      return date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4);
    } else if (date.length >= 3) {
      return date.slice(0,2) + '/' + date.slice(2);
    }
    return date;
  }

  export function isOlderThan18(dateStr) {
    const parts = dateStr.split('/');
    if (parts.length !== 3) return false;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    if (!day || !month || !year) return false;
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  }