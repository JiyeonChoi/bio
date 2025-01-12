import bioImg from "../assets/bio.jpg";
import emailImg from "../assets/email.svg";
import instagramImg from "../assets/instagram.svg";
import stravaImg from "../assets/strava.svg";
import bgPlant from "../assets/bgPlant.png";

const Bio = () => {
  const styles = {
    bioImg: {
      borderRadius: "50%",
      width: "150px",
      marginBottom: "-10px",
    },
    socialLinks: {
      marginTop: "-10px",
    },
    emailIcon: {
      marginRight: "5px",
    },
    igIcon: {
      marginRight: "7px",
      verticalAlign: "2px",
    },
    stravaIcon: {
      verticalAlign: "3px",
    },
    jobTitle: {
      fontWeight: 600,
    },
    bio: {
      fontWeight: 100,
      fontSize: "13px",
    },
    bgPlantImg: {
      width: "400px",
    },
    buttonContainer: {
      backgroundImage: `url(${bgPlant})`,
      width: "auto",
      height: "600px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "50px 50px 0px 0px",
      marginLeft: "-32px",
      marginRight: "-32px",
      marginBottom: "-32px",
      marginTop: "20px",
    },
    buttonList: {
      paddingTop: "30px",
    },
    linkButton: {
      width: "85%",
      padding: "20px",
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "20px",
    },
    hotItem: {
      borderRadius: "8px",
      background: "#ac0f0f",
      color: "white",
      padding: "2px 8px",
      fontSize: "12px",
      verticalAlign: "8px",
    },
    supportText: {
      fontSize: "11px",
      fontWeight: 400,
      fontFamily: "serif",
      display: "block",
      marginBottom: "10px",
    },
    supportIgButton: {
      background: "#314C18",
      color: "white",
      border: "1px solid white",
      margin: "10px",
      padding: "15px 40px",
    },
    supportCofeeButton: {
      color: "#314C18",
      margin: "10px",
      padding: "15px 40px",
    },
  };

  return (
    <div>
      <img src={bioImg} style={styles.bioImg} />
      <h3>Jenny Choi</h3>
      {/* social links */}
      <div style={styles.socialLinks}>
        <a href="mailto:itsjennychoi@gmail.com">
          <img src={emailImg} style={styles.emailIcon} />
        </a>
        <a href="https://www.instagram.com/jennychoi.xx/">
          <img src={instagramImg} style={styles.igIcon} />
        </a>
        <a href="https://www.strava.com/athletes/136788298">
          <img src={stravaImg} style={styles.stravaIcon} />
        </a>
      </div>
      <h5 style={styles.jobTitle}>Software Engineer | Personal Trainer</h5>
      <span style={styles.bio}>
        I love spending my time at the gym, running outdoors, coding projects,
        managing investments, taking photos, and cooking meals.
      </span>
      <div style={styles.buttonContainer}>
        <div style={styles.buttonList}>
          <button
            style={styles.linkButton}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "";
            }}
          >
            Fitness Guide for Beginners <span style={styles.hotItem}>HOT</span>
          </button>
          <button
            style={styles.linkButton}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "";
            }}
          >
            Healthy Recipes
          </button>
          <button
            style={styles.linkButton}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "";
            }}
          >
            Investment Calculator
          </button>
          <button
            style={styles.linkButton}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "";
            }}
          >
            Photography
          </button>
        </div>
        <div>
          <span style={styles.supportText}>
            I build all the websites & tools myself, including this
            Linktree-like one! <br />
            Support me if anything's been helpful,
            <br />
            or feel free to follow me on Instagram!
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/jennychoi.xx/";
            }}
            style={styles.supportIgButton}
          >
            Instagram
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "";
            }}
            style={styles.supportCofeeButton}
          >
            Buy me ☕️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bio;
