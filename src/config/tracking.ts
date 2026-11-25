/**
 * Configuração centralizada de rastreamento e analytics.
 * Substitua os identificadores abaixo pelos IDs reais da conta antes da publicação.
 * Se optar por gerenciar GA4 e Meta Pixel via Google Tag Manager (GTM_ID preenchido),
 * os scripts diretos de GA4 e Meta Pixel não serão carregados em duplicidade.
 */
export const TRACKING_CONFIG = {
  META_PIXEL_ID: 'INSERIR_ID_AQUI',
  GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
  GTM_ID: '', // Ex: 'GTM-XXXXXXX' — deixe vazio para usar GA4 e Meta Pixel diretamente
} as const;

export const CONSENT_STORAGE_KEY = 'recuperatech_cookie_consent_v1';

export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};
