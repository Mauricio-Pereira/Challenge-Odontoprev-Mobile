export function validateCEP(value) {
  if (!value) return "CEP não pode ficar vazio.";
  if (value.length !== 8)
    return "CEP deve ter exatamente 8 dígitos (sem hífen).";
  return "";
}

// Exemplo de validação de número
export function validateNumero(value) {
  if (!value) return "Número não pode ficar vazio.";
  // Você pode adicionar mais regras se precisar
  return "";
}

// Verifica se a data (formato DD/MM/AAAA) indica que o usuário tem 18 anos ou mais
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