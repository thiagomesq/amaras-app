export type SkinColor = "Branco" | "Preto" | "Pardo" | "Amarela" | "Indígena";

export interface PersonalIdentification {
  nomeCompleto: string;
  dataNascimento: string; // ISO date
  sexoGenero: string;
  nomeMae: string;
  nomeResponsavel: string;
  corDaPele: SkinColor;
  cpf?: string;
  certidaoNascimento?: string;
  endereco?: {
    rua?: string; numero?: string; bairro?: string; cidade?: string; estado?: string; cep?: string;
  };
  telefone?: string;
  emailResponsavel?: string;
}

export interface Schooling {
  estuda: boolean;
  nomeEscola?: string;
  serieAno?: string;
  turno?: "manhã" | "tarde" | "noite";
  dataIngresso?: string;
  frequenciaPercentual?: number;
  necessidadesEspeciais?: string;
  programas?: { transporte?: boolean; merenda?: boolean; reforco?: boolean };
  contatoProfessor?: { nome?: string; contato?: string };
}

export interface InstitutionActivities {
  aulas: {
    futebol?: boolean;
    alfabetizacao?: boolean;
    educacaoFinanceira?: boolean;
    ingles?: boolean;
    musicalizacao?: boolean;
  };
  observacoes?: string;
}

export interface Health {
  pesoKg: number;
  alturaCm: number;
  deficiencias?: string;
  condicoesCronicas: string;
  alergias: string;
  medicamentosContinuos?: string;
  historicoInternacoesCirurgias?: string;
}

export interface ChildRegistration {
  identificacao: PersonalIdentification;
  escolaridade: Schooling;
  atividades: InstitutionActivities;
  saude: Health;
}
