import supabase from "./supabase";

export async function uploadContact(objectData) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([objectData])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function getContacts() {
    let { data, error } = await supabase
  .from('contacts')
  .select('*')

  if(error) throw new Error(error.message)

  return data;
}
