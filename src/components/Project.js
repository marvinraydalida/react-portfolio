import { useEffect } from "react";
import ProjectGrid from "./ProjectGrid";

function Project() {
  useEffect(() => {
    document.body.className = "scroll-body";
    document.body.parentNode.className = "scroll-body";
  }, []);
  return (
    <section className="project-section">
      <h1>
        <span>self.</span>works
      </h1>
      <p>
        Here are some of the projects that I have developed and have been
        involved in developing.
      </p>

      <div className="project-container">
        <ProjectGrid
          title="Salin: Filipino speech to Baybayin"
          description={
            '"Salin" is a web app that allows you to transcribe spoken Filipino into the Baybayin script with ease. By utilizing advanced speech recognition and regular expression technologies, Salin helps you to preserve the ancient writing system of the Philippines and promote the use of the Baybayin script in a modern, accessible way.'
          }
          technology={["javascript", "html", "css"]}
          code="https://github.com/marvinraydalida/baybayin-transcription"
          url="https://marvinraydalida.github.io/baybayin-transcription/"
          link={true}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1Ye4bzg2kqQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </ProjectGrid>
        <ProjectGrid
          title="Axie Infinity management tracker"
          description="The Axie Infinity Scholar Tracker is a management system for tracking daily activities of scholars. It provides important information including SLP earnings, Elo rating, adventure completion, SLP share percentage, and scholar details. It also offers current cryptocurrency values for Ethereum, Axie Infinity, and Smooth Love Potion in Philippine Peso and calculates the manager's earnings based on their share of SLP multiplied by the current market value."
          technology={[
            "php",
            "codeigniter",
            "javascript",
            "mysql",
            "html",
            "css",
          ]}
          code="https://github.com/marvinraydalida/axie-management-tracker"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/E516M7RJG8E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </ProjectGrid>
        <ProjectGrid
          title="Spot: Music mood prediction"
          description="Spot Music Mood Prediction is a Django-based web application that uses a machine learning model based on logistic regression to predict the mood of a track from the Spotify API. Users can search for a track directly within the application, which extracts information such as tempo, mode, danceability, energy, and valence from the Spotify API and feeds it into the model. The model then analyzes these features to predict the mood of the track as happy, sad, calm, or energetic."
          technology={[
            "python",
            "django",
            "sklearn",
            "javascript",
            "html",
            "css",
          ]}
          code="https://github.com/marvinraydalida/spot-music-mood-prediction"
        >
          <img src="/images/spot.png" alt="" />
        </ProjectGrid>
        <ProjectGrid
          title="Appointment management system"
          description="Our dental clinic appointment management system is a software application developed for our Software Engineering 2 subject. It enables administrators to manage appointment requests through an easy-to-use admin dashboard. Patients can also use the web application to send appointment requests, which the administrators can approve, reschedule, or reject. With this system, dental clinic administrators can better manage their appointments and provide efficient and effective services to their patients."
          technology={[
            "php",
            "codeigniter",
            "javascript",
            "mysql",
            "html",
            "css",
          ]}
          code="https://github.com/marvinraydalida/Appointment-system"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-c6--puzjjg?start=330"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </ProjectGrid>
        <ProjectGrid
          title="Nudeny API: Image based nudity content detector"
          description="Nudeny API, an ongoing project, is an image-based nudity content detector that uses both object detection and classification models to identify and censor inappropriate content. The API can be integrated into various applications, including a Discord bot and a browser extension, making it easy for users to detect and censor inappropriate images within their online communities."
          technology={[
            "python",
            "fastapi",
            "tensorflow"
          ]}
          code="https://github.com/marvinraydalida/Nudeny-API"
        >
          <img src="https://www.bandcds.co.uk/wp-content/uploads/2017/01/parental_advisory_explicit_content_lge_logo.gif" alt="" />
        </ProjectGrid>
      </div>
    </section>
  );
}

export default Project;
