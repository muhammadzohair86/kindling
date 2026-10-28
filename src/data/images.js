// Resolves photos in src/assets/images by file name, e.g. img('1.jpg').
const files = import.meta.glob('../assets/images/*.{jpg,png}', { eager: true, import: 'default' });
export const img = (name) => files[`../assets/images/${name}`];
