export async function getName() {
  const req = await fetch("./settings.json");
  const res = await req.json();
  return {hola_variable} = res;
}