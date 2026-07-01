import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl="https://wtrtrjflpvetbksithrb.supabase.co/storage/v1/object/public/videos/trialvid.mp4";
const supabaseKey="453a17efd985256b7755e6e26575228d";

export const supabase=createClient(
    supabaseUrl,
    supabaseKey
);
