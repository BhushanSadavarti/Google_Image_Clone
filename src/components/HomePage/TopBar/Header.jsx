import React, { useState } from "react";
import {
  Container,
  LeftIcon,
  SearchSwitcher,
  SwitchButton,
  UserIcon,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  FooterLinks,
} from "./styles";
import { FaFlask } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Sparkles } from "lucide-react";

const Header = () => {
  const [active, setActive] = useState("google");
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  const userInitial = "A";

  return (
    <Container>
      <LeftIcon>
        <FaFlask color="#8ab4f8" />
      </LeftIcon>
      <SearchSwitcher>
        <SwitchButton
          active={active === "google"}
          onClick={() => setActive("google")}
        >
          <FcGoogle /> Search
        </SwitchButton>
        <SwitchButton
          active={active === "gemini"}
          onClick={() => setActive("gemini")}
        >
          <Sparkles size={14} />
        </SwitchButton>
      </SearchSwitcher>
      <UserIcon onClick={toggleDropdown}>{userInitial}</UserIcon>

      {dropdown && (
        <Dropdown>
          <DropdownHeader>
            <UserIcon>{userInitial}</UserIcon>
            <div>
              <div style={{ fontWeight: "bold" }}>Your Name</div>
              <div style={{ fontSize: "12px", color: "#bbb" }}>
                youremail@example.com
              </div>
            </div>
          </DropdownHeader>
          <button
            style={{
              marginTop: "10px",
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              background: "#303134",
              border: "none",
              color: "white",
            }}
          >
            Manage your Google Account
          </button>

          {[
            "Turn on Incognito",
            "Search history",
            "Delete last 15 mins",
            "SafeSearch",
            "Interests",
            "Passwords",
            "Your profile",
            "Search personalisation",
            "Settings",
            "Help and feedback",
          ].map((text, idx) => (
            <DropdownItem key={idx}>{text}</DropdownItem>
          ))}

          <FooterLinks>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </FooterLinks>
        </Dropdown>
      )}
    </Container>
  );
};

export default Header;
