import Link from "next/link";
import { profile } from "@/app/site-data";
import {
  BuildingIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
} from "@/app/components/site-icons";

export default function AuthorProfile() {
  return (
    <aside className="author-profile" aria-label="Author profile">
      <div className="author-avatar" aria-hidden="true">
        {profile.initials}
      </div>
      <div className="author-profile__body">
        <h2>{profile.name}</h2>
        {/*<p className="author-profile__role">{profile.role}</p>*/}
        <p className="author-profile__bio">{profile.bio}</p>
      </div>
      <ul className="author-links">
        <li>
          <LocationIcon />
          <span>{profile.location}</span>
        </li>
        <li>
          <BuildingIcon />
          <span>{profile.affiliation}</span>
        </li>
        <li>
          <GitHubIcon />
          <Link href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
        </li>
        <li>
          <LinkedInIcon />
          <Link href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
        </li>
      </ul>
    </aside>
  );
}
