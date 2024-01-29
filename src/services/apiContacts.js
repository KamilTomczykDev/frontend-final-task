import supabase from "./supabase";

export async function insertContact(objectData) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([objectData])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function getContacts() {
  let { data, error } = await supabase.from("contacts").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function updateContact(id, newData) {
  const { data, error } = await supabase
    .from("contacts")
    .update({ ...newData })
    .eq("id", id);

  console.log(id, newData);
  console.log(data);

  if (error) throw new Error(error.message);

  return data;
}
