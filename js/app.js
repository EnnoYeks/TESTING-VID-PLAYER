import { supabase } from "./supabaseClient.js";

async function loadVideos(){

    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("media_type","video")
        .order("created_at",{ascending:false});

    if(error){
        console.error(error);
        return;
    }

    const feed=document.getElementById("videoFeed");

    feed.innerHTML="";

    data.forEach(post=>{

        feed.innerHTML += `
        <div class="video-card">

            <video controls>

                <source src="${post.media_url}" type="video/mp4">

            </video>

            <div class="info">

                <h2>${post.title}</h2>

                <p>${post.description}</p>

                <div class="stats">

                    ❤️ ${post.likes_count}

                    💬 ${post.comments_count}

                    👁️ ${post.views_count}

                </div>

            </div>

        </div>
        `;

    });

}

loadVideos();
