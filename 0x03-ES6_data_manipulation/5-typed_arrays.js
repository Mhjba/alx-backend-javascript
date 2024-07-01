export default function createInt8TypedArray(length, position, value) {
  const newbuffer = new ArrayBuffer(length);
  const int8 = new DataView(newbuffer, 0, length);

  if (position >= length) {
    throw Error('Position outside range');
  }
  int8.setInt8(position, value);
  return int8;
}
