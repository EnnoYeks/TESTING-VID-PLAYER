import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl="https://wtrtrjflpvetbksithrb.supabase.co/rest/v1/;
const supabaseKey="sb_publishable_77_5Ap9D-bTs_6QDRgWa1A_oA_LDKb9";

export const supabase=createClient(
    supabaseUrl,
    supabaseKey
);
