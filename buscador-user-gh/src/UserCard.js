import React from "react";
import { FaGithub } from "react-icons/fa";
import "./styles/UserCard.css";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import PolylineIcon from '@mui/icons-material/Polyline';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserCard = ({ userData }) => {
  if (!userData) {
    return null;
  }

  return (
    <div className="finder2">
      <div className="card">
        <div className="card-body additional">
          <div className="user-card">
            <label className="level center">{userData.login}</label>
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="round"
            />
            <label className="points center">{formatDate(userData.created_at)}</label>
          </div>
          <div className="more-info">
            <h1> {userData.name}</h1>
            <div className="coords">
              <span><LocationOnIcon />{userData.location}</span>
              <span> <TwitterIcon />@{userData.twitter_username}</span>
            </div>
            <div className="coords center">
              <a><LanguageIcon />{userData.blog}</a>
            </div>
            <div className="coords">
              <div className="stats float-stats">
                <div className="title">REPOS</div>
                <i> <PolylineIcon /> </i><br></br>
                <value>{userData.public_repos}</value>
              </div>
              <div className="stats float-stats">
                <div className="title">FOLLOWERS</div>
                <i><GroupsIcon /> </i><br></br>
                <value>{userData.followers}</value>
              </div>
              <div className="stats float-stats">
                <div className="title">FOLLOWING</div>
                <i><PeopleAltIcon /> </i><br></br>
                <value className="infinity">{userData.following}</value>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleString('es-ES', options);
  }
  
  
};

export default UserCard;
