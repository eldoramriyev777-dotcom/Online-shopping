import React from "react";
import styled from "styled-components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function CategoryModal() {
  const navigate = useNavigate();

  return (
    <FullscreenWrapper>
      <ModalContent>
        <CloseButton onClick={() => navigate(-1)}>&times;</CloseButton>

        <Tabs>
          <Tab to="/category/woman">Woman</Tab>
          <Tab to="/category/man">Man</Tab>
          <Tab to="/category/kids">Kids</Tab>
        </Tabs>

        <Outlet />
      </ModalContent>
    </FullscreenWrapper>
  );
}

// 🔹 Styled Components

const FullscreenWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 60px;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  color: #000;
`;

const CloseButton = styled.button`
  position: absolute;
  left: -50px;
  top: 0;
  font-size: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #d32f2f;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
`;

const Tab = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  padding-bottom: 8px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;

  &.active {
    color: #000;
    border-bottom: 2px solid #000;
  }

  &:hover {
    color: #000;
  }
`;
