import { supabase } from "./supabaseClient.js";

async function loadVideos(){

    const {data,error}=await supabase
        .from("posts")
        .select("*")
        .eq("media_type","video")
        .order("created_at",{ascending:false});

    if(error){
        alert(error.message);
        return;
    }

    const feed=document.getElementById("feed");

    feed.innerHTML="";

    data.forEach(post=>{

        feed.innerHTML+=`

        <div class="video-card">

            <video
                controls
                autoplay
                muted
                loop
                playsinline>

                <source
                src="${post.video_url}"
                type="video/mp4">

            </video>

            <div class="info">

                <h2>${post.title}</h2>

                <p>${post.description}</p>

            </div>

        </div>

        `;

    });

}

loadVideos();
