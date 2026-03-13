const intenseTokensByThemeId = {
  'mari-kitagawa': {
    '--theme-accent': '#EFA7B0',       // Rosa chá (suave)
    '--theme-accent-soft': '#F3E5AB',  // Amarelo "Vanilla" (ofuscado/pastel)
    '--theme-accent-strong': '#4A4238',// Marrom acinzentado (contraste suave)
    '--theme-accent-alt': '#DBC1AD',   // Bege rosado
    '--theme-bg-start': '#FDF5F6',     // Fundo quase branco com blush
    '--theme-bg-mid': '#F9EAE1',
    '--theme-bg-end': '#E8D5C4',
    '--theme-surface': '#000',
    '--theme-surface-2': '#000',
    '--theme-text-muted': '#000',
    '--theme-paper': '#FFFDFB',
    '--theme-paper-2': '#F7EFE6',
    '--theme-ink': '#3D352E',          // Marrom café muito escuro (melhor que preto puro aqui)
    '--theme-ink-soft': '#8C7B6E',
    '--theme-stroke': '#E5D1B8',
    '--theme-soft-a': '#B5D8EB',       // Azul bebê (lentes)
    '--theme-soft-b': '#F4C2C2',       // Rosa pastel
    '--theme-soft-c': '#000',       // Creme pálido
  },
  'rias-gremory': {
    '--theme-accent': '#be242f',
    '--theme-accent-soft': '#c7464b',
    '--theme-accent-strong': '#eacfbd',
    '--theme-accent-alt': '#d88b84',
    '--theme-bg-start': '#6d111a',
    '--theme-bg-mid': '#2e171a',
    '--theme-bg-end': '#180f11',
    '--theme-surface': '#590c15',
    '--theme-surface-2': '#442025',
    '--theme-text-muted': '#eacfbd',
    '--theme-paper': '#fdfbf9',
    '--theme-paper-2': '#f7eee7',
    '--theme-ink': '#2e171a',
    '--theme-ink-soft': '#442025',
    '--theme-stroke': '#aa1f2a',
    '--theme-soft-a': '#81161f',
    '--theme-soft-b': '#4e4c54',
    '--theme-soft-c': '#211a18',
  },
  'zero-two': {
    '--theme-accent': '#eb9ea9',
    '--theme-accent-soft': '#f28985',
    '--theme-accent-strong': '#fbb1ac',
    '--theme-accent-alt': '#f0bdb7',
    '--theme-bg-start': '#D7263D',
    '--theme-bg-mid': '#AC1E30',
    '--theme-bg-end': '#16110b',
    '--theme-surface': '#433322',
    '--theme-surface-2': '#59442d',
    '--theme-text-muted': '#f2c8bb',
    '--theme-paper': '#fef9f3',
    '--theme-paper-2': '#fceddb',
    '--theme-ink': '#2c2217',
    '--theme-ink-soft': '#433322',
    '--theme-stroke': '#bf6871',
    '--theme-soft-a': '#33130a',
    '--theme-soft-b': '#bf6871',
    '--theme-soft-c': '#51544b',
  },
luffy: {
    '--theme-accent': '#D52735',       // Vermelho Capitão (Colete)
    '--theme-accent-soft': '#daa955',  // Amarelo Ouro (Faixa/Chapéu)
    '--theme-accent-strong': '#fff',// Azul Oceano (Shorts)
    '--theme-accent-alt': '#daa955',
    '--theme-bg-start': '#D52735',     // Fundo com degradê no vermelho icônico
    '--theme-bg-mid': '#B8212D',
    '--theme-bg-end': '#D52735',
    '--theme-surface': '#FFFFFF',
    '--theme-surface-2': '#F9F4E8',    // Off-white amarelado
    '--theme-text-muted': '#F9F4E8',
    '--theme-paper': '#FDF9ED',        // Cor de palha clara (descanso visual)
    '--theme-paper-2': '#F2E8CF',      // Pergaminho de mapa do tesouro
    '--theme-ink': '#1A1A1A',          // Preto profundo para leitura
    '--theme-ink-soft': '#3E62AD',     // Detalhes de texto em Azul
    '--theme-stroke': '#BC3F38',       // Bordas em tom de couro/vermelho escuro
    '--theme-soft-a': '#3E62AD',       // Accent Azul
    '--theme-soft-b': '#F5BD07',       // Accent Amarelo
    '--theme-soft-c': '#FFFFFF',
  },
  naruto: {
    '--theme-accent': '#FF6B00',
    '--theme-accent-soft': '#FFB347',
    '--theme-accent-strong': '#fff',
    '--theme-accent-alt': '#FF8C4D',
    '--theme-bg-start': '#FF6B00',
    '--theme-bg-mid': '#E65100',
    '--theme-bg-end': '#802D00',
    '--theme-surface': '#FFFFFF',
    '--theme-surface-2': '#F9F9F9',
    '--theme-text-muted': '#fff',
    '--theme-paper': '#FFF8F0',
    '--theme-paper-2': '#FFE0B2',
    '--theme-ink': '#fff',
    '--theme-ink-soft': '#2B65EC',
    '--theme-stroke': '#D35400',
    '--theme-soft-a': '#2B65EC',
    '--theme-soft-b': '#FFD700',
    '--theme-soft-c': '#fff',
  },
}

const buildThemeVars = (theme) => {
  const accent = theme.accent
  const light = theme.light
  const dark = theme.dark
  const soft = theme.soft
  const text = theme.text ?? {}

  const fallbackVars = {
    '--theme-accent': accent[0],
    '--theme-accent-soft': accent[3],
    '--theme-accent-strong': accent[5],
    '--theme-accent-alt': accent[8],
    '--theme-bg-start': dark[3],
    '--theme-bg-mid': dark[2],
    '--theme-bg-end': dark[1],
    '--theme-surface': dark[4],
    '--theme-surface-2': dark[5],
    '--theme-text': text.primary ?? light[0],
    '--theme-text-muted': text.muted ?? light[8],
    '--theme-paper': light[2],
    '--theme-paper-2': light[4],
    '--theme-ink': dark[2],
    '--theme-ink-soft': dark[4],
    '--theme-stroke': soft[0],
    '--theme-soft-a': soft[1],
    '--theme-soft-b': soft[2],
    '--theme-soft-c': soft[3],
  }

  return {
    ...fallbackVars,
    ...(intenseTokensByThemeId[theme.id] ?? {}),
  }
}

export const themes = [
  // Para adicionar um novo tema, basta incluir um novo objeto neste array
  // com id, label, accent/light/dark/soft seguindo o mesmo formato.
  {
    id: 'mari-kitagawa',
    label: 'Mari Kitagawa',
    text: { primary: '#1a1a1a', muted: '#3d352e' },
    accent: ['#f2d1a9', '#f3d7b4', '#f4ddc0', '#f6e2cb', '#f7e8d7', '#f8eee2', '#c79b6b', '#d1ac83', '#dbbc9b', '#e4cdb2', '#000000', '#f8eee2'],
    light: ['#ffffff', '#fefbf7', '#fdf7ef', '#fbf2e8', '#faeee0', '#f9ead8', '#f8e6d0', '#f7e2c8', '#f6dec0', '#f4d9b9', '#f3d5b1', '#f2d1a9'],
    dark: ['#000000', '#16130f', '#2c261f', '#42392e', '#584c3d', '#6e5f4d', '#84725c', '#9a856c', '#b0987b', '#c6ab8a', '#dcbe9a', '#f2d1a9'],
    soft: ['#8c7869', '#4c5c38', '#3e404c', '#101013'],
  },
  {
    id: 'rias-gremory',
    label: 'Rias Gremory',
    text: { primary: '#ffffff', muted: '#eacfbd' },
    accent: ['#eacfbd', '#e1ada1', '#d88b84', '#d06868', '#c7464b', '#be242f', '#590c15', '#6d111a', '#81161f', '#961a25', '#aa1f2a', '#be242f'],
    light: ['#ffffff', '#fdfbf9', '#fbf6f3', '#f9f2ed', '#f7eee7', '#f5e9e1', '#f4e5db', '#f2e0d5', '#f0dccf', '#eed8c9', '#ecd3c3', '#eacfbd'],
    dark: ['#000000', '#180f11', '#2e171a', '#442025', '#592930', '#6f323b', '#853b46', '#9b4452', '#b14d5d', '#c75668', '#dc5f73', '#eacfbd'],
    soft: ['#85848c', '#4e4c54', '#595956', '#211a18'],
  },
  {
    id: 'zero-two',
    label: 'Zero Two',
    text: { primary: '#ffffff', muted: '#f2c8bb' },
    accent: ['#f4bc7c', '#f4c08a', '#f4c597', '#f4c9a5', '#f4ceb2', '#f4d2c0', '#eb9ea9', '#eda8ae', '#efb3b2', '#f0bdb7', '#f2c8bb', '#f4d2c0'],
    light: ['#ffffff', '#fef9f3', '#fdf3e7', '#fceddb', '#fbe7cf', '#fae1c3', '#f9dab8', '#f8d4ac', '#f7cea0', '#f6c894', '#f5c288', '#f4bc7c'],
    dark: ['#000000', '#16110b', '#2c2217', '#433322', '#59442d', '#6f5538', '#856744', '#9b784f', '#b1895a', '#c89a65', '#deab71', '#f4bc7c'],
    soft: ['#bf6871', '#33130a', '#6b201e', '#51544b'],
  },
  {
    id: 'luffy',
    label: 'Luffy',
    text: { primary: '#fff', muted: '#F9F4E8' },
    accent: ['#eccca1', '#e7c297', '#e2b98e', '#dcaf84', '#d7a67b', '#d29c71', '#a72927', '#b04036', '#b85745', '#c16e53', '#c98562', '#d29c71'],
    light: ['#ffffff', '#fdfaf6', '#fcf6ee', '#faf1e5', '#f8ecdd', '#f6e8d4', '#f5e3cc', '#f3dfc3', '#f1dabb', '#efd5b2', '#eed1aa', '#eccca1'],
    dark: ['#000000', '#15130f', '#2b251d', '#40382c', '#564a3b', '#6b5d49', '#816f58', '#968266', '#ac9475', '#c1a784', '#d7b992', '#eccca1'],
    soft: ['#446481', '#445c7c', '#623c33', '#181512'],
  },
  {
    id: 'naruto',
    label: 'Naruto',
    text: { primary: '#ffffff', muted: '#ffe0b2' },
    accent: ['#d6a044', '#d18e3e', '#cc7b39', '#c66933', '#c1562e', '#bc4428', '#e4dbcc', '#dcbdab', '#d49f8a', '#cc806a', '#c46249', '#bc4428'],
    light: ['#ffffff', '#fbf6ee', '#f8eedd', '#f4e5cc', '#f0dcbb', '#ecd4aa', '#e9cb99', '#e5c388', '#e1ba77', '#ddb166', '#daa955', '#d6a044'],
    dark: ['#000000', '#130f06', '#271d0c', '#3a2c13', '#4e3a19', '#61491f', '#755725', '#88662b', '#9c7431', '#af8338', '#c3913e', '#d6a044'],
    soft: ['#95918e', '#67645c', '#1d1812', '#5a524e'],
  },
].map((theme) => ({
  ...theme,
  vars: buildThemeVars(theme),
}))

export const defaultThemeId = 'zero-two'
