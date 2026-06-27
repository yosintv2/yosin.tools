export interface SettingConfig {
  type: 'button' | 'checkbox' | 'select' | 'text' | 'details' | 'input';
  id?: string;
  label?: string;
  value?: string;
  options?: { value: string; label: string; selected?: boolean; attrs?: Record<string, string> }[];
  placeholder?: string;
  defaultChecked?: boolean;
  attrs?: Record<string, string>;
  children?: SettingConfig[];
  display?: string;
}

export interface ToolConfig {
  slug: string;
  label: string;
  section: string;
  group: string;
  description: string;
  longDescription: string;
  placeholder: string;
  outputPlaceholder?: string;
  btnLabel: string;
  methodFn?: string;
  jsFiles: string[];
  hasHMAC?: boolean;
  isFile?: boolean;
  hasFileInput?: boolean;
  hasEncoding?: boolean;
  hasOutputEncoding?: boolean;
  category: string;
  settings: SettingConfig[];
  faq: { q: string; a: string }[];
  seoContent: string;
  relatedTools: string[];
  breadcrumb: string[];
  badge?: string;
}

export interface NavGroup {
  name: string;
  items: { label: string; slug: string }[];
}

export interface NavSection {
  section: string;
  groups: NavGroup[];
}

export const NAV: NavSection[] = [
  {
    section: 'Hash',
    groups: [
      { name: 'CRC', items: [{ label: 'CRC', slug: 'hash/crc' }] },
      {
        name: 'MD',
        items: [
          { label: 'MD2', slug: 'hash/md2' }, { label: 'MD2 File', slug: 'hash/md2-file' },
          { label: 'MD4', slug: 'hash/md4' }, { label: 'MD4 File', slug: 'hash/md4-file' },
          { label: 'MD5', slug: 'hash/md5' }, { label: 'MD5 File', slug: 'hash/md5-file' },
        ]
      },
      {
        name: 'SHA1',
        items: [
          { label: 'SHA1', slug: 'hash/sha1' }, { label: 'SHA1 File', slug: 'hash/sha1-file' },
        ]
      },
      {
        name: 'SHA2',
        items: [
          { label: 'SHA224', slug: 'hash/sha224' }, { label: 'SHA224 File', slug: 'hash/sha224-file' },
          { label: 'SHA256', slug: 'hash/sha256' }, { label: 'SHA256 File', slug: 'hash/sha256-file' },
          { label: 'Double SHA256', slug: 'hash/double-sha256' },
        ]
      },
      {
        name: 'SHA2-512',
        items: [
          { label: 'SHA384', slug: 'hash/sha384' }, { label: 'SHA384 File', slug: 'hash/sha384-file' },
          { label: 'SHA512', slug: 'hash/sha512' }, { label: 'SHA512 File', slug: 'hash/sha512-file' },
          { label: 'SHA512/224', slug: 'hash/sha512-224' }, { label: 'SHA512/224 File', slug: 'hash/sha512-224-file' },
          { label: 'SHA512/256', slug: 'hash/sha512-256' }, { label: 'SHA512/256 File', slug: 'hash/sha512-256-file' },
        ]
      },
      {
        name: 'SHA3',
        items: [
          { label: 'SHA3-224', slug: 'hash/sha3-224' }, { label: 'SHA3-224 File', slug: 'hash/sha3-224-file' },
          { label: 'SHA3-256', slug: 'hash/sha3-256' }, { label: 'SHA3-256 File', slug: 'hash/sha3-256-file' },
          { label: 'SHA3-384', slug: 'hash/sha3-384' }, { label: 'SHA3-384 File', slug: 'hash/sha3-384-file' },
          { label: 'SHA3-512', slug: 'hash/sha3-512' }, { label: 'SHA3-512 File', slug: 'hash/sha3-512-file' },
        ]
      },
      {
        name: 'Keccak',
        items: [
          { label: 'Keccak-224', slug: 'hash/keccak-224' }, { label: 'Keccak-224 File', slug: 'hash/keccak-224-file' },
          { label: 'Keccak-256', slug: 'hash/keccak-256' }, { label: 'Keccak-256 File', slug: 'hash/keccak-256-file' },
          { label: 'Keccak-384', slug: 'hash/keccak-384' }, { label: 'Keccak-384 File', slug: 'hash/keccak-384-file' },
          { label: 'Keccak-512', slug: 'hash/keccak-512' }, { label: 'Keccak-512 File', slug: 'hash/keccak-512-file' },
        ]
      },
      {
        name: 'SHAKE',
        items: [
          { label: 'SHAKE128', slug: 'hash/shake128' }, { label: 'SHAKE128 File', slug: 'hash/shake128-file' },
          { label: 'SHAKE256', slug: 'hash/shake256' }, { label: 'SHAKE256 File', slug: 'hash/shake256-file' },
        ]
      },
      {
        name: 'cSHAKE',
        items: [
          { label: 'cSHAKE128', slug: 'hash/cshake128' }, { label: 'cSHAKE128 File', slug: 'hash/cshake128-file' },
          { label: 'cSHAKE256', slug: 'hash/cshake256' }, { label: 'cSHAKE256 File', slug: 'hash/cshake256-file' },
        ]
      },
      {
        name: 'KMAC',
        items: [
          { label: 'KMAC128', slug: 'hash/kmac128' }, { label: 'KMAC128 File', slug: 'hash/kmac128-file' },
          { label: 'KMAC256', slug: 'hash/kmac256' }, { label: 'KMAC256 File', slug: 'hash/kmac256-file' },
        ]
      },
      {
        name: 'RIPEMD',
        items: [
          { label: 'RIPEMD-128', slug: 'hash/ripemd-128' }, { label: 'RIPEMD-128 File', slug: 'hash/ripemd-128-file' },
          { label: 'RIPEMD-160', slug: 'hash/ripemd-160' }, { label: 'RIPEMD-160 File', slug: 'hash/ripemd-160-file' },
          { label: 'RIPEMD-256', slug: 'hash/ripemd-256' }, { label: 'RIPEMD-256 File', slug: 'hash/ripemd-256-file' },
          { label: 'RIPEMD-320', slug: 'hash/ripemd-320' }, { label: 'RIPEMD-320 File', slug: 'hash/ripemd-320-file' },
        ]
      },
      {
        name: 'BLAKE',
        items: [
          { label: 'BLAKE2b', slug: 'hash/blake2b' }, { label: 'BLAKE2b File', slug: 'hash/blake2b-file' },
          { label: 'BLAKE2s', slug: 'hash/blake2s' }, { label: 'BLAKE2s File', slug: 'hash/blake2s-file' },
        ]
      },
    ]
  },
  {
    section: 'Encoding',
    groups: [
      { name: 'Base64', items: [{ label: 'Base64 Encode', slug: 'encode/base64-encode' }, { label: 'Base64 Decode', slug: 'encode/base64-decode' }] },
      { name: 'Base32', items: [{ label: 'Base32 Encode', slug: 'encode/base32-encode' }, { label: 'Base32 Decode', slug: 'encode/base32-decode' }] },
      { name: 'Base58', items: [{ label: 'Base58 Encode', slug: 'encode/base58-encode' }, { label: 'Base58 Decode', slug: 'encode/base58-decode' }] },
      { name: 'Hex (Base16)', items: [{ label: 'Hex Encode', slug: 'encode/hex-encode' }, { label: 'Hex Decode', slug: 'encode/hex-decode' }, { label: 'File to Hex', slug: 'encode/file-to-hex' }, { label: 'Hex to File', slug: 'encode/hex-to-file' }] },
      { name: 'Web', items: [{ label: 'HTML Encode', slug: 'encode/html-encode' }, { label: 'HTML Decode', slug: 'encode/html-decode' }, { label: 'URL Encode', slug: 'encode/url-encode' }, { label: 'URL Decode', slug: 'encode/url-decode' }] },
    ]
  },
  {
    section: 'Formatters',
    groups: [
      { name: 'JSON', items: [{ label: 'JSON Formatter', slug: 'format/json-formatter' }, { label: 'JSON Minifier', slug: 'format/json-minifier' }, { label: 'JSON Validator', slug: 'format/json-validator' }] },
      { name: 'XML', items: [{ label: 'XML Formatter', slug: 'format/xml-formatter' }, { label: 'XML Minifier', slug: 'format/xml-minifier' }, { label: 'XML Validator', slug: 'format/xml-validator' }] },
    ]
  },
  {
    section: 'Converters',
    groups: [
      { name: 'Case', items: [{ label: 'Case Converter', slug: 'convert/case-converter' }] },
    ]
  },
  {
    section: 'Cryptography',
    groups: [
      { name: 'AES', items: [{ label: 'AES Encrypt', slug: 'crypto/aes-encrypt' }, { label: 'AES Decrypt', slug: 'crypto/aes-decrypt' }] },
      { name: 'DES', items: [{ label: 'DES Encrypt', slug: 'crypto/des-encrypt' }, { label: 'DES Decrypt', slug: 'crypto/des-decrypt' }] },
      { name: 'Triple DES', items: [{ label: 'Triple DES Encrypt', slug: 'crypto/triple-des-encrypt' }, { label: 'Triple DES Decrypt', slug: 'crypto/triple-des-decrypt' }] },
      { name: 'RC4', items: [{ label: 'RC4 Encrypt', slug: 'crypto/rc4-encrypt' }, { label: 'RC4 Decrypt', slug: 'crypto/rc4-decrypt' }] },
      { name: 'ECDSA', items: [{ label: 'ECDSA Key Gen', slug: 'crypto/ecdsa-keygen' }, { label: 'ECDSA Sign', slug: 'crypto/ecdsa-sign' }, { label: 'ECDSA Verify', slug: 'crypto/ecdsa-verify' }] },
      { name: 'RSA', items: [{ label: 'RSA Key Gen', slug: 'crypto/rsa-keygen' }, { label: 'RSA Sign', slug: 'crypto/rsa-sign' }, { label: 'RSA Encrypt', slug: 'crypto/rsa-encrypt' }, { label: 'RSA Decrypt', slug: 'crypto/rsa-decrypt' }] },
    ]
  }
];

export const ALL_TOOLS: Record<string, ToolConfig> = {};

function def(t: ToolConfig) {
  ALL_TOOLS[t.slug] = t;
}

// ── Hash tools ──────────────────────────────────────────────────

const hashSettings: SettingConfig[] = [
  { type: 'button', id: 'execute', label: 'Hash' },
  { type: 'checkbox', id: 'auto-update', label: 'Auto Update', defaultChecked: true },
  { type: 'checkbox', id: 'remember-input', label: 'Remember Input' },
  { type: 'select', id: 'input-type', label: 'Input Encoding', value: 'utf-8', attrs: { 'data-toggle': 'encoding' }, options: [
    { value: 'hex', label: 'Hex' }, { value: 'base64', label: 'Base64', attrs: { 'data-load-encoding': 'base64' } },
    { value: 'utf-8', label: 'UTF-8', selected: true },
    { value: 'utf-16le', label: 'UTF-16LE', attrs: { 'data-load-encoding': '1' } },
    { value: 'utf-16be', label: 'UTF-16BE', attrs: { 'data-load-encoding': '1' } },
  ]},
  { type: 'select', id: 'output-type', label: 'Output Encoding', value: 'hex', attrs: { 'data-toggle': 'encoding', 'data-type': 'hex' }, options: [
    { value: 'hex', label: 'Hex (Lower Case)' }, { value: 'hex_upper', label: 'Hex (Upper Case)' },
    { value: 'base64', label: 'Base64', attrs: { 'data-load-encoding': 'base64' } },
  ]},
];

const hmacSettings: SettingConfig[] = [
  { type: 'checkbox', id: 'hmac-enabled', label: 'Enable HMAC', attrs: { 'data-remember': 'hmac-enabled', 'data-share': 'hmac_enabled' }},
  { type: 'details', id: 'hmac', label: 'HMAC', display: 'none', children: [
    { type: 'select', id: 'hmac-input-type', label: 'Encoding', value: 'utf-8', attrs: { 'data-toggle': 'encoding' }, options: [
      { value: 'hex', label: 'Hex' }, { value: 'base64', label: 'Base64', attrs: { 'data-load-encoding': 'base64' } },
      { value: 'utf-8', label: 'UTF-8', selected: true },
    ]},
    { type: 'input', id: 'hmac-key', label: 'Key', placeholder: 'Enter HMAC key…' },
  ]},
];

const jsBase = (method: string, file: string, extra?: string[]) => [
  ...(extra || []),
  'js/hmac.js',
  `js/${file}`,
  'js/clipboard.min.js',
];

const hashFAQ = (name: string, bits: string, hexLen: string, author: string, year: string): { q: string; a: string }[] => [
  { q: `What is ${name}?`, a: `${name} is a cryptographic hash function designed by ${author} in ${year}. It produces a ${bits}-bit (${hexLen} hex character) digest.` },
  { q: `Is ${name} secure?`, a: `${name} is widely used for integrity checks. For security-sensitive applications, prefer SHA-256 or SHA-3.` },
  { q: `What is HMAC-${name}?`, a: `HMAC-${name} is a keyed-hash message authentication code using ${name} as the underlying hash function, providing both integrity and authenticity verification.` },
  { q: `What is the output length of ${name}?`, a: `${name} always produces a ${bits}-bit output, shown as a ${hexLen}-character hexadecimal string.` },
  { q: `Can I reverse a ${name} hash?`, a: `${name} is a one-way function and cannot be mathematically reversed. However, common values can be looked up in precomputed tables.` },
];

const crcFAQ = [
  { q: 'What is CRC?', a: 'CRC (Cyclic Redundancy Check) is an error-detecting code used to detect accidental changes to data. It is not a cryptographic hash.' },
  { q: 'Is CRC secure?', a: 'No. CRC is designed for error detection, not cryptographic security. It can be easily forged and must not be used for security purposes.' },
  { q: 'What CRC variants are supported?', a: 'This tool supports CRC-8, CRC-16, CRC-24, CRC-32, CRC-64, and their many sub-variants (IEEE, ECMA, etc.).' },
  { q: 'Can CRC detect all errors?', a: 'No. CRC has a fixed error-detection probability based on its polynomial and length. CRC-32 misses approximately 1 in 4 billion errors.' },
];

// ── Helper: define hash tools ──
const hashDescs: Record<string, { bits: string; hex: string; author: string; year: string; label: string; noHMAC?: boolean }> = {
  'crc': { bits: 'variable', hex: 'variable', author: 'W. Wesley Peterson', year: '1961', label: 'CRC', noHMAC: true },
  'double-sha256': { bits: '256', hex: '64', author: 'NSA', year: '2001', label: 'Double SHA256' },
  'shake128': { bits: 'variable', hex: 'variable', author: 'Keccak Team', year: '2015', label: 'SHAKE128' },
  'shake256': { bits: 'variable', hex: 'variable', author: 'Keccak Team', year: '2015', label: 'SHAKE256' },
  'cshake128': { bits: 'variable', hex: 'variable', author: 'NIST', year: '2015', label: 'cSHAKE128' },
  'cshake256': { bits: 'variable', hex: 'variable', author: 'NIST', year: '2015', label: 'cSHAKE256' },
  'kmac128': { bits: 'variable', hex: 'variable', author: 'NIST', year: '2015', label: 'KMAC128' },
  'kmac256': { bits: 'variable', hex: 'variable', author: 'NIST', year: '2015', label: 'KMAC256' },
  'blake2b': { bits: '512', hex: '128', author: 'Jean-Philippe Aumasson et al.', year: '2012', label: 'BLAKE2b' },
  'blake2s': { bits: '256', hex: '64', author: 'Jean-Philippe Aumasson et al.', year: '2012', label: 'BLAKE2s' },
  'md2': { bits: '128', hex: '32', author: 'Ronald Rivest', year: '1989', label: 'MD2' },
  'md4': { bits: '128', hex: '32', author: 'Ronald Rivest', year: '1990', label: 'MD4' },
  'md5': { bits: '128', hex: '32', author: 'Ronald Rivest', year: '1991', label: 'MD5' },
  'sha1': { bits: '160', hex: '40', author: 'NSA', year: '1995', label: 'SHA1' },
  'sha224': { bits: '224', hex: '56', author: 'NSA', year: '2001', label: 'SHA224' },
  'sha256': { bits: '256', hex: '64', author: 'NSA', year: '2001', label: 'SHA256' },
  'sha384': { bits: '384', hex: '96', author: 'NSA', year: '2001', label: 'SHA384' },
  'sha512': { bits: '512', hex: '128', author: 'NSA', year: '2001', label: 'SHA512' },
  'sha512-224': { bits: '224', hex: '56', author: 'NSA', year: '2001', label: 'SHA512/224' },
  'sha512-256': { bits: '256', hex: '64', author: 'NSA', year: '2001', label: 'SHA512/256' },
  'sha3-224': { bits: '224', hex: '56', author: 'Keccak Team', year: '2015', label: 'SHA3-224' },
  'sha3-256': { bits: '256', hex: '64', author: 'Keccak Team', year: '2015', label: 'SHA3-256' },
  'sha3-384': { bits: '384', hex: '96', author: 'Keccak Team', year: '2015', label: 'SHA3-384' },
  'sha3-512': { bits: '512', hex: '128', author: 'Keccak Team', year: '2015', label: 'SHA3-512' },
  'keccak-224': { bits: '224', hex: '56', author: 'Guido Bertoni et al.', year: '2008', label: 'Keccak-224' },
  'keccak-256': { bits: '256', hex: '64', author: 'Guido Bertoni et al.', year: '2008', label: 'Keccak-256' },
  'keccak-384': { bits: '384', hex: '96', author: 'Guido Bertoni et al.', year: '2008', label: 'Keccak-384' },
  'keccak-512': { bits: '512', hex: '128', author: 'Guido Bertoni et al.', year: '2008', label: 'Keccak-512' },
  'ripemd-128': { bits: '128', hex: '32', author: 'Hans Dobbertin et al.', year: '1996', label: 'RIPEMD-128' },
  'ripemd-160': { bits: '160', hex: '40', author: 'Hans Dobbertin et al.', year: '1996', label: 'RIPEMD-160' },
  'ripemd-256': { bits: '256', hex: '64', author: 'Hans Dobbertin et al.', year: '1996', label: 'RIPEMD-256' },
  'ripemd-320': { bits: '320', hex: '80', author: 'Hans Dobbertin et al.', year: '1996', label: 'RIPEMD-320' },
};

function makeHashTool(name: string, jsFile: string, methodFn: string, extraJS: string[] = []): void {
  const info = hashDescs[name];
  if (!info) return;
  const label = info.label;
  const slug = `hash/${name}`;
  const bits = info.bits;
  const hexLen = info.hex;
  const noHMAC = info.noHMAC || false;

  def({
    slug,
    label,
    section: 'Hash',
    group: name.includes('sha3') ? 'SHA3' : name.includes('keccak') ? 'Keccak' : name.includes('ripemd') ? 'RIPEMD' : name.includes('blake2b') || name.includes('blake2s') ? 'BLAKE' : name.includes('sha512') ? 'SHA2-512' : name.includes('sha224') || name.includes('sha256') || name === 'double-sha256' ? 'SHA2' : name.includes('sha1') ? 'SHA1' : name.includes('md2') ? 'MD' : name.includes('md4') ? 'MD' : name.includes('md5') ? 'MD' : name.includes('crc') ? 'CRC' : name.includes('shake') ? 'SHAKE' : name.includes('cshake') ? 'cSHAKE' : name.includes('kmac') ? 'KMAC' : '',
    description: `Generate ${label} hash online instantly. ${noHMAC ? 'Supports CRC-8/16/24/32/64 variants. Fast, free, and 100% browser-based.' : `Supports UTF-8, UTF-16, Hex, Base64 input encodings and HMAC-${label}. Fast, free, and 100% browser-based.`}`,
    longDescription: `Calculate ${label} hashes instantly online. ${noHMAC ? 'Supports CRC-8/16/24/32/64 and other CRC variants.' : `Supports UTF-8, UTF-16, Hex, and Base64 input encodings. Enable HMAC-${label} with a secret key for message authentication.`}`,
    placeholder: 'Enter text to hash…',
    btnLabel: 'Hash',
    methodFn,
    jsFiles: [...extraJS, `js/${jsFile}`],
    hasHMAC: !noHMAC,
    hasEncoding: !noHMAC,
    hasOutputEncoding: true,
    category: 'hash',
    settings: noHMAC ? hashSettings : [...hashSettings, ...hmacSettings],
    faq: !noHMAC ? hashFAQ(label, bits, hexLen, info.author, info.year) : crcFAQ,
    seoContent: noHMAC ? `<h2>About ${label} Hash Generator</h2><p>CRC (Cyclic Redundancy Check) is an error-detecting code used to detect accidental changes to data. It is not a cryptographic hash.</p>` : `<h2>About ${label} Hash Generator</h2><p>${label} produces a ${bits}-bit hash value, typically rendered as a ${hexLen}-character hexadecimal number. It is widely used for integrity checking and digital signatures.</p>`,
    relatedTools: [],
    breadcrumb: ['Home', 'Hash', label],
  });
}

function makeHashFileTool(baseName: string): void {
  const base = ALL_TOOLS[`hash/${baseName}`];
  if (!base) return;
  const slug = `hash/${baseName}-file`;
  def({
    slug,
    label: `${base.label} File`,
    section: 'Hash',
    group: base.group,
    description: `Generate ${base.label} hash from file online. Upload any file and compute its ${base.label} checksum. Browser-based, no upload.`,
    longDescription: `Calculate ${base.label} checksum of any file. Drag and drop a file or click to browse. Supports large files via chunked reading.`,
    placeholder: '',
    btnLabel: 'Hash',
    methodFn: base.methodFn,
    jsFiles: base.jsFiles,
    hasHMAC: true,
    isFile: true,
    hasFileInput: true,
    category: 'hash-file',
    settings: base.settings,
    faq: base.faq,
    seoContent: base.seoContent,
    relatedTools: [],
    breadcrumb: ['Home', 'Hash', `${base.label} File`],
  });
}

// Register all hash tools
const hashToolDefs: [string, string, string, string[]?][] = [
  ['crc', 'crc.min.js', 'CRC', []],
  ['md2', 'crypto-api.js', 'md2', []],
  ['md4', 'md4.min.js', 'md4', []],
  ['md5', 'md5.min.js', 'md5', []],
  ['sha1', 'crypto-api.js', 'sha1', []],
  ['sha224', 'models.min.js', 'SHA224', []],
  ['sha256', 'models.min.js', 'SHA256', []],
  ['double-sha256', 'models.min.js', 'SHA256', []],
  ['sha384', 'models.min.js', 'SHA384', []],
  ['sha512', 'models.min.js', 'SHA512', []],
  ['sha512-224', 'models.min.js', 'SHA512_224', []],
  ['sha512-256', 'models.min.js', 'SHA512_256', []],
  ['sha3-224', 'models.min.js', 'SHA3_224', []],
  ['sha3-256', 'models.min.js', 'SHA3_256', []],
  ['sha3-384', 'models.min.js', 'SHA3_384', []],
  ['sha3-512', 'models.min.js', 'SHA3_512', []],
  ['keccak-224', 'models.min.js', 'KECCAK224', []],
  ['keccak-256', 'models.min.js', 'KECCAK256', []],
  ['keccak-384', 'models.min.js', 'KECCAK384', []],
  ['keccak-512', 'models.min.js', 'KECCAK512', []],
  ['shake128', 'models.min.js', 'SHAKE128', []],
  ['shake256', 'models.min.js', 'SHAKE256', []],
  ['cshake128', 'models.min.js', 'CSHAKE128', []],
  ['cshake256', 'models.min.js', 'CSHAKE256', []],
  ['kmac128', 'models.min.js', 'KMAC128', []],
  ['kmac256', 'models.min.js', 'KMAC256', []],
  ['ripemd-128', 'crypto-api.js', 'ripemd128', []],
  ['ripemd-160', 'crypto-api.js', 'ripemd160', []],
  ['ripemd-256', 'crypto-api.js', 'ripemd256', []],
  ['ripemd-320', 'crypto-api.js', 'ripemd320', []],
  ['blake2b', 'blake2.js', 'BLAKE2b', []],
  ['blake2s', 'blake2.js', 'BLAKE2s', []],
];

hashToolDefs.forEach(([name, jsFile, methodFn, extra]) => {
  makeHashTool(name, jsFile, methodFn, extra);
  if (name !== 'double-sha256' && name !== 'crc') {
    makeHashFileTool(name);
  }
});

// Override specific tool descriptions and FAQ
const md5Tool = ALL_TOOLS['hash/md5'];
if (md5Tool) {
  md5Tool.faq = [
    { q: 'What is MD5?', a: 'MD5 (Message Digest 5) is a widely used cryptographic hash function that produces a 128-bit (32 hex character) hash value. It was designed by Ronald Rivest in 1991 as an improvement over MD4.' },
    { q: 'Is MD5 still safe to use?', a: 'MD5 is not safe for cryptographic security — collision attacks are practical and fast. However, it is still widely used for non-security integrity checks such as verifying file downloads, generating cache keys, and checksumming data in databases.' },
    { q: 'What is HMAC-MD5?', a: 'HMAC-MD5 is a keyed-hash message authentication code using MD5 as the underlying function. It is used to verify both data integrity and authenticity when a shared secret key is available.' },
    { q: 'What is the output length of MD5?', a: 'MD5 always produces a 128-bit output, typically shown as a 32-character lowercase hexadecimal string.' },
    { q: 'Can I reverse an MD5 hash?', a: 'MD5 is a one-way function — you cannot mathematically reverse it. However, common values can be looked up in rainbow tables. This is why MD5 must never be used for password storage.' },
  ];
  md5Tool.seoContent = `<h2>About MD5 Hash Generator</h2><p>MD5 (Message Digest 5) was designed by Ronald Rivest in 1991 and published as RFC 1321. It produces a 128-bit digest from any input. Despite being cryptographically broken, it remains common in file integrity verification and legacy systems.</p><h3>How MD5 Works</h3><p>MD5 pads the input to a length that is 64 bytes short of a multiple of 512 bits, then appends a 64-bit representation of the original message length. The padded message is processed in 512-bit blocks through four rounds of 16 operations using non-linear functions, modular addition, and left-rotation.</p><h3>MD5 for File Integrity</h3><p>When a file is distributed, the publisher often includes an MD5 checksum alongside it. After downloading, you run the same MD5 algorithm on the file and compare the result. If the hashes match, the file has not been corrupted in transit.</p>`;
}

const sha256Tool = ALL_TOOLS['hash/sha256'];
if (sha256Tool) {
  sha256Tool.faq = [
    { q: 'What is SHA-256?', a: 'SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function designed by the NSA and published by NIST in 2001. It produces a 256-bit (64 hex character) digest and is part of the SHA-2 family.' },
    { q: 'Is SHA-256 secure?', a: 'Yes. SHA-256 is considered cryptographically secure and is widely used in blockchain, TLS certificates, and digital signatures. No practical collision attacks have been demonstrated.' },
    { q: 'What is the difference between SHA-256 and SHA-2?', a: 'SHA-2 is the family of hash functions that includes SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, and SHA-512/256. SHA-256 is one specific member of this family.' },
    { q: 'How is SHA-256 used in Bitcoin?', a: 'Bitcoin uses Double SHA-256 — applying SHA-256 twice — as its proof-of-work mechanism. This is the core of Bitcoin mining.' },
    { q: 'What is the output length of SHA-256?', a: 'SHA-256 always produces a 256-bit output, shown as a 64-character hexadecimal string.' },
  ];
  sha256Tool.seoContent = `<h2>About SHA-256 Hash Generator</h2><p>SHA-256 (Secure Hash Algorithm 256-bit) is one of the most widely used cryptographic hash functions in the world. It was published by NIST in 2001 as FIPS PUB 180-4. SHA-256 produces a 256-bit digest from any input and is the cornerstone of modern internet security.</p><h3>How SHA-256 Works</h3><p>SHA-256 processes input in 512-bit blocks. Each block undergoes 64 rounds of compression using logical functions, modular addition, and bitwise operations. The initial hash values are the first 32 bits of the fractional parts of the square roots of the first 8 primes.</p>`;
}

// ── Encode tools ────────────────────────────────────────────────

function makeEncodeTool(slug: string, label: string, description: string, longDesc: string, methodFn: string, related: string[]): void {
  def({
    slug: `encode/${slug}`,
    label,
    section: 'Encoding',
    group: slug.includes('base64') ? 'Base64' : slug.includes('base32') ? 'Base32' : slug.includes('base58') ? 'Base58' : slug.includes('hex') ? 'Hex (Base16)' : 'Web',
    description,
    longDescription: longDesc,
    placeholder: 'Enter text…',
    btnLabel: 'Convert',
    methodFn,
    jsFiles: [],
    category: 'encode',
    settings: [
      { type: 'button', id: 'execute', label: 'Convert' },
      { type: 'checkbox', id: 'auto-update', label: 'Auto Update', defaultChecked: true },
    ],
    faq: [],
    seoContent: '',
    relatedTools: related.map(r => `encode/${r}`),
    breadcrumb: ['Home', 'Encoding', label],
  });
}

makeEncodeTool('base64-encode', 'Base64 Encode', 'Encode text to Base64 online. Fast, free, and browser-based. No data is uploaded.', 'Encode text to Base64 online. Supports UTF-8 input. 100% browser-based.', '_base64Encode', ['base64-decode', 'hex-encode', 'url-encode']);
makeEncodeTool('base64-decode', 'Base64 Decode', 'Decode Base64 to text online. Fast, free, and browser-based. No data is uploaded.', 'Decode Base64 strings back to readable text. Supports UTF-8 output.', '_base64Decode', ['base64-encode', 'hex-decode', 'url-decode']);
makeEncodeTool('base32-encode', 'Base32 Encode', 'Encode text to Base32 online. Fast, free, and browser-based.', 'Encode text to Base32. 100% browser-based — nothing is uploaded.', '_base32Encode', ['base32-decode', 'base64-encode', 'hex-encode']);
makeEncodeTool('base32-decode', 'Base32 Decode', 'Decode Base32 to text online. Fast, free, and browser-based.', 'Decode Base32 strings back to readable text.', '_base32Decode', ['base32-encode', 'base64-decode', 'hex-decode']);
makeEncodeTool('base58-encode', 'Base58 Encode', 'Encode text to Base58 online. Fast, free, and browser-based.', 'Encode text to Base58. Used in Bitcoin addresses.', '_base58Encode', ['base58-decode', 'base64-encode', 'hex-encode']);
makeEncodeTool('base58-decode', 'Base58 Decode', 'Decode Base58 to text online. Fast, free, and browser-based.', 'Decode Base58 strings back to readable text.', '_base58Decode', ['base58-encode', 'base64-decode', 'hex-decode']);
makeEncodeTool('hex-encode', 'Hex Encode', 'Encode text to hexadecimal online. Fast, free, and browser-based.', 'Convert text to hexadecimal representation.', '_hexEncode', ['hex-decode', 'base64-encode', 'html-encode']);
makeEncodeTool('hex-decode', 'Hex Decode', 'Decode hexadecimal to text online. Fast, free, and browser-based.', 'Convert hexadecimal strings back to readable text.', '_hexDecode', ['hex-encode', 'base64-decode', 'html-decode']);
makeEncodeTool('file-to-hex', 'File to Hex', 'Convert any file to hexadecimal representation online. Browser-based.', 'Upload any file and view its bytes as hexadecimal. Supports large files.', '_fileToHex', ['hex-encode', 'hex-to-file', 'base64-encode']);
makeEncodeTool('hex-to-file', 'Hex to File', 'Convert hexadecimal back to a downloadable file online.', 'Paste hex data and download as a binary file.', '_hexToFile', ['file-to-hex', 'hex-decode', 'base64-decode']);
makeEncodeTool('html-encode', 'HTML Encode', 'Encode text to HTML entities online. Fast, free, and browser-based.', 'Convert special characters to HTML entities to prevent XSS and rendering issues.', '_htmlEncode', ['html-decode', 'url-encode', 'base64-encode']);
makeEncodeTool('html-decode', 'HTML Decode', 'Decode HTML entities to plain text online. Fast, free, and browser-based.', 'Convert HTML entities back to readable text.', '_htmlDecode', ['html-encode', 'url-decode', 'base64-decode']);
makeEncodeTool('url-encode', 'URL Encode', 'Encode text for URLs online. Fast, free, and browser-based.', 'Percent-encode text for safe inclusion in URLs and query parameters.', '_urlEncode', ['url-decode', 'html-encode', 'base64-encode']);
makeEncodeTool('url-decode', 'URL Decode', 'Decode URL-encoded text online. Fast, free, and browser-based.', 'Convert percent-encoded URLs back to readable text.', '_urlDecode', ['url-encode', 'html-decode', 'base64-decode']);

// ── Format tools ────────────────────────────────────────────────

function makeFormatTool(slug: string, label: string, desc: string, longDesc: string, methodFn: string, related: string[], faq: { q: string; a: string }[], seo: string): void {
  def({
    slug: `format/${slug}`,
    label,
    section: 'Formatters',
    group: slug.includes('json') ? 'JSON' : 'XML',
    description: desc,
    longDescription: longDesc,
    placeholder: 'Enter input…',
    btnLabel: slug.includes('validate') ? 'Validate' : slug.includes('minify') ? 'Minify' : 'Format',
    methodFn,
    jsFiles: [],
    category: 'format',
    settings: [
      { type: 'button', id: 'execute', label: slug.includes('validate') ? 'Validate' : slug.includes('minify') ? 'Minify' : 'Format' },
      { type: 'checkbox', id: 'auto-update', label: 'Auto Update', defaultChecked: true },
    ],
    faq,
    seoContent: seo,
    relatedTools: related.map(r => `format/${r}`),
    breadcrumb: ['Home', 'Formatters', label],
  });
}

makeFormatTool('json-formatter', 'JSON Formatter', 'Format and beautify JSON online. Validates and pretty-prints JSON data.', 'Format and beautify messy JSON data with proper indentation for readability.', '_jsonFormat', ['json-minifier', 'json-validator', 'xml-formatter'], [
  { q: 'What is JSON formatting?', a: 'JSON formatting (or beautification) takes minified or messy JSON and adds proper indentation, line breaks, and spacing to make it human-readable.' },
  { q: 'Is my JSON data safe?', a: 'Yes. All processing happens entirely in your browser. No data is ever sent to any server.' },
  { q: 'What JSON standards are supported?', a: 'This tool follows the ECMA-404 JSON specification and supports all valid JSON data types including objects, arrays, strings, numbers, booleans, and null.' },
], '<h2>About JSON Formatter</h2><p>JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write. This formatter helps you beautify minified JSON for debugging and development.</p>');

makeFormatTool('json-minifier', 'JSON Minifier', 'Minify JSON online. Compress JSON by removing all whitespace.', 'Compress JSON data by removing unnecessary whitespace and formatting to reduce size.', '_jsonMinify', ['json-formatter', 'json-validator', 'xml-minifier'], [
  { q: 'Why minify JSON?', a: 'Minifying JSON reduces file size by removing whitespace, making it faster to transmit over networks. This is essential for APIs and mobile applications.' },
  { q: 'Does minification change the data?', a: 'No. Minification only removes unnecessary whitespace. The data structure and values remain identical.' },
], '<h2>About JSON Minifier</h2><p>Minifying JSON removes all unnecessary whitespace, reducing bandwidth usage and improving load times for APIs and web applications.</p>');

makeFormatTool('json-validator', 'JSON Validator', 'Validate JSON online. Check if your JSON syntax is correct.', 'Check whether your input is valid JSON according to the ECMA-404 specification.', '_jsonValidate', ['json-formatter', 'json-minifier', 'xml-validator'], [
  { q: 'What does JSON validation check?', a: 'JSON validation checks that your input conforms to the JSON specification — proper syntax, correct data types, valid structure, no trailing commas, and proper string escaping.' },
  { q: 'Why is JSON validation important?', a: 'Invalid JSON can break APIs, cause parsing errors, and lead to data loss. Validation helps catch issues early in development.' },
], '<h2>About JSON Validator</h2><p>JSON validation is essential for ensuring data integrity. This tool checks your JSON against the ECMA-404 specification and provides clear error messages for debugging.</p>');

makeFormatTool('xml-formatter', 'XML Formatter', 'Format and beautify XML online. Pretty-prints XML with proper indentation.', 'Beautify and format raw XML with proper indentation for readability.', '_xmlFormat', ['xml-minifier', 'xml-validator', 'json-formatter'], [
  { q: 'What is XML formatting?', a: 'XML formatting takes raw or minified XML and adds proper indentation, line breaks, and spacing to make it readable.' },
  { q: 'Does this support all XML?', a: 'Yes. This tool supports well-formed XML documents including custom namespaces, CDATA sections, comments, and processing instructions.' },
], '<h2>About XML Formatter</h2><p>XML (eXtensible Markup Language) is a markup language designed for storing and transporting data. This formatter beautifies your XML for readability.</p>');

makeFormatTool('xml-minifier', 'XML Minifier', 'Minify XML online. Compress XML by removing whitespace.', 'Compress XML by removing unnecessary whitespace to reduce file size.', '_xmlMinify', ['xml-formatter', 'xml-validator', 'json-minifier'], [
  { q: 'Why minify XML?', a: 'Minifying XML reduces file size, improves network transfer speeds, and reduces storage requirements for XML data.' },
], '<h2>About XML Minifier</h2><p>XML minification removes unnecessary whitespace while preserving the data structure. This is useful for reducing bandwidth in SOAP APIs and XML data feeds.</p>');

makeFormatTool('xml-validator', 'XML Validator', 'Validate XML online. Check if your XML is well-formed.', 'Check whether your XML document is well-formed and follows proper syntax.', '_xmlValidate', ['xml-formatter', 'xml-minifier', 'json-validator'], [
  { q: 'What is XML validation?', a: 'XML validation checks that your document is well-formed — proper tag matching, correct nesting, valid attributes, and proper encoding.' },
], '<h2>About XML Validator</h2><p>This validator checks if your XML is well-formed according to the W3C XML specification, helping you catch syntax errors and structural issues.</p>');

// ── Convert tools ───────────────────────────────────────────────
def({
  slug: 'convert/case-converter',
  label: 'Case Converter',
  section: 'Converters',
  group: 'Case',
  description: 'Convert text between different letter cases: lower, UPPER, CamelCase, snake_case, kebab-case, and more.',
  longDescription: 'Convert any text between lowercase, UPPERCASE, Title Case, camelCase, PascalCase, snake_case, kebab-case, and CONSTANT_CASE.',
  placeholder: 'Enter text to convert…',
  btnLabel: 'Convert',
  methodFn: '_caseConvert',
  jsFiles: [],
  category: 'convert',
  settings: [
    { type: 'button', id: 'execute', label: 'Convert' },
    { type: 'checkbox', id: 'auto-update', label: 'Auto Update', defaultChecked: true },
    { type: 'select', id: 'case-type', label: 'Target Case', value: 'lower', options: [
      { value: 'lower', label: 'lower case', selected: true },
      { value: 'upper', label: 'UPPER CASE' },
      { value: 'title', label: 'Title Case' },
      { value: 'camel', label: 'camelCase' },
      { value: 'pascal', label: 'PascalCase' },
      { value: 'snake', label: 'snake_case' },
      { value: 'kebab', label: 'kebab-case' },
      { value: 'constant', label: 'CONSTANT_CASE' },
    ]},
  ],
  faq: [
    { q: 'What is camelCase?', a: 'camelCase starts with a lowercase letter and capitalizes the first letter of each subsequent word (e.g., "helloWorld").' },
    { q: 'What is PascalCase?', a: 'PascalCase capitalizes the first letter of every word (e.g., "HelloWorld"). It is also called UpperCamelCase.' },
    { q: 'What is snake_case?', a: 'snake_case uses underscores between words with all lowercase letters (e.g., "hello_world").' },
  ],
  seoContent: '<h2>About Case Converter</h2><p>Convert text between all common letter cases. Useful for programming variable names, database fields, CSS classes, and data normalization.</p>',
  relatedTools: [],
  breadcrumb: ['Home', 'Converters', 'Case Converter'],
});

// ── Crypto tools ────────────────────────────────────────────────
const cryptoFAQ: Record<string, { q: string; a: string }[]> = {
  'aes': [
    { q: 'What is AES?', a: 'AES (Advanced Encryption Standard) is a symmetric block cipher standardized by NIST in 2001. It encrypts data in 128-bit blocks using key sizes of 128, 192, or 256 bits.' },
    { q: 'Which mode should I use?', a: 'CBC (Cipher Block Chaining) is recommended for most uses. It requires a random IV and provides good security. ECB is simpler but less secure.' },
    { q: 'What is the IV?', a: 'The IV (Initialization Vector) is a random value that ensures the same plaintext encrypted with the same key produces different ciphertext. In CBC mode, the IV must be 16 bytes (32 hex chars).' },
    { q: 'Is my data safe?', a: 'Yes. All encryption happens entirely in your browser using CryptoJS. Nothing is sent to any server.' },
  ],
  'des': [
    { q: 'What is DES?', a: 'DES (Data Encryption Standard) is a symmetric block cipher developed by IBM in the 1970s. It uses a 56-bit key and is now considered obsolete due to its short key length.' },
    { q: 'Is DES secure?', a: 'No. DES can be brute-forced in under 24 hours with modern hardware. Use AES instead for any serious encryption.' },
  ],
  '3des': [
    { q: 'What is Triple DES?', a: 'Triple DES (3DES) applies DES three times with different keys, effectively providing 112-bit or 168-bit security. It is being phased out by NIST.' },
  ],
  'rc4': [
    { q: 'What is RC4?', a: 'RC4 is a stream cipher designed by Ron Rivest in 1987. It is known for its simplicity and speed but has known vulnerabilities and should not be used in new applications.' },
  ],
  'ecdsa': [
    { q: 'What is ECDSA?', a: 'ECDSA (Elliptic Curve Digital Signature Algorithm) is a public-key cryptography algorithm used for digital signatures. It is based on elliptic curve cryptography.' },
  ],
  'rsa': [
    { q: 'What is RSA?', a: 'RSA (Rivest-Shamir-Adleman) is a public-key cryptosystem widely used for secure data transmission and digital signatures. It was invented in 1977.' },
  ],
};

function makeCryptoTool(slug: string, label: string, group: string, desc: string, longDesc: string, methodFn: string, placeholder: string, outputPlaceholder: string, faqKey: string, related: string[], jsFiles: string[] = []): void {
  def({
    slug: `crypto/${slug}`,
    label,
    section: 'Cryptography',
    group,
    description: desc,
    longDescription: longDesc,
    placeholder,
    outputPlaceholder,
    btnLabel: slug.includes('decrypt') ? 'Decrypt' : slug.includes('sign') ? 'Sign' : slug.includes('verify') ? 'Verify' : slug.includes('keygen') ? 'Generate' : 'Encrypt',
    methodFn,
    jsFiles,
    category: 'crypto',
    settings: [],
    faq: cryptoFAQ[faqKey] || [],
    seoContent: '',
    relatedTools: related.map(r => `crypto/${r}`),
    breadcrumb: ['Home', 'Cryptography', label],
  });
}

makeCryptoTool('aes-encrypt', 'AES Encrypt', 'AES', 'Encrypt text with AES-256, AES-192, or AES-128 online. Supports CBC, ECB, CTR modes.', 'AES Encrypt', '_aesEncrypt', 'Enter plaintext to encrypt…', 'Encrypted output (Base64) appears here…', 'aes', ['aes-decrypt']);
makeCryptoTool('aes-decrypt', 'AES Decrypt', 'AES', 'Decrypt AES-encrypted text online. Supports CBC, ECB, CTR modes.', 'AES Decrypt', '_aesDecrypt', 'Enter ciphertext to decrypt…', 'Decrypted output appears here…', 'aes', ['aes-encrypt']);
makeCryptoTool('des-encrypt', 'DES Encrypt', 'DES', 'Encrypt text with DES online. Supports CBC, ECB modes.', 'DES Encrypt', '_desEncrypt', 'Enter plaintext to encrypt…', 'Encrypted output (Base64)…', 'des', ['des-decrypt']);
makeCryptoTool('des-decrypt', 'DES Decrypt', 'DES', 'Decrypt DES-encrypted text online.', 'DES Decrypt', '_desDecrypt', 'Enter ciphertext…', 'Decrypted output…', 'des', ['des-encrypt']);
makeCryptoTool('triple-des-encrypt', 'Triple DES Encrypt', 'Triple DES', 'Encrypt text with Triple DES (3DES) online.', 'Triple DES Encrypt', '_tripleDesEncrypt', 'Enter plaintext…', 'Encrypted output…', '3des', ['triple-des-decrypt']);
makeCryptoTool('triple-des-decrypt', 'Triple DES Decrypt', 'Triple DES', 'Decrypt Triple DES (3DES) encrypted text online.', 'Triple DES Decrypt', '_tripleDesDecrypt', 'Enter ciphertext…', 'Decrypted output…', '3des', ['triple-des-encrypt']);
makeCryptoTool('rc4-encrypt', 'RC4 Encrypt', 'RC4', 'Encrypt text with RC4 stream cipher online.', 'RC4 Encrypt', '_rc4Encrypt', 'Enter plaintext…', 'Encrypted output (Base64)…', 'rc4', ['rc4-decrypt']);
makeCryptoTool('rc4-decrypt', 'RC4 Decrypt', 'RC4', 'Decrypt RC4-encrypted text online.', 'RC4 Decrypt', '_rc4Decrypt', 'Enter ciphertext…', 'Decrypted output…', 'rc4', ['rc4-encrypt']);
makeCryptoTool('ecdsa-keygen', 'ECDSA Key Gen', 'ECDSA', 'Generate ECDSA key pairs online. Supports P-256, P-384, P-521 curves.', 'ECDSA Key Pair Generator', '_ecdsaKeygen', '', '', 'ecdsa', ['ecdsa-sign', 'ecdsa-verify']);
makeCryptoTool('ecdsa-sign', 'ECDSA Sign', 'ECDSA', 'Sign messages with ECDSA private key online.', 'ECDSA Sign', '_ecdsaSign', '', '', 'ecdsa', ['ecdsa-keygen', 'ecdsa-verify']);
makeCryptoTool('ecdsa-verify', 'ECDSA Verify', 'ECDSA', 'Verify ECDSA signatures online using a public key.', 'ECDSA Verify', '_ecdsaVerify', '', '', 'ecdsa', ['ecdsa-keygen', 'ecdsa-sign']);
makeCryptoTool('rsa-keygen', 'RSA Key Gen', 'RSA', 'Generate RSA key pairs online. Supports 1024, 2048, 4096-bit keys.', 'RSA Key Pair Generator', '_rsaKeygen', '', '', 'rsa', ['rsa-sign', 'rsa-encrypt']);
makeCryptoTool('rsa-sign', 'RSA Sign', 'RSA', 'Sign messages with RSA private key online.', 'RSA Sign', '_rsaSign', '', '', 'rsa', ['rsa-keygen', 'rsa-verify']);
makeCryptoTool('rsa-encrypt', 'RSA Encrypt', 'RSA', 'Encrypt messages with RSA public key online.', 'RSA Encrypt', '_rsaEncrypt', '', '', 'rsa', ['rsa-keygen', 'rsa-decrypt']);
makeCryptoTool('rsa-decrypt', 'RSA Decrypt', 'RSA', 'Decrypt RSA-encrypted messages with private key online.', 'RSA Decrypt', '_rsaDecrypt', '', '', 'rsa', ['rsa-keygen', 'rsa-encrypt']);

export function getTool(slug: string): ToolConfig | undefined {
  return ALL_TOOLS[slug];
}

export function getToolsBySection(section: string): ToolConfig[] {
  return Object.values(ALL_TOOLS).filter(t => t.section === section);
}

export function getPopularTools(): ToolConfig[] {
  const popular = ['hash/md5', 'hash/sha256', 'hash/sha1', 'hash/sha512', 'hash/sha3-256', 'hash/keccak-256', 'hash/blake2b', 'encode/base64-encode', 'encode/hex-encode', 'encode/url-encode', 'encode/html-encode', 'format/json-formatter', 'format/json-validator', 'crypto/aes-encrypt', 'crypto/rsa-keygen'];
  return popular.map(s => ALL_TOOLS[s]).filter(Boolean);
}
