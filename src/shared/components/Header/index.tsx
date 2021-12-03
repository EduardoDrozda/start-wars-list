import React, { useState } from "react";
import {
  Container,
  HeaderLogo,
  HeaderOption,
  HeaderOptions,
  HeaderOptionsWrapper,
} from "./styles";

import logo from "../../../assets/img/logo.png";
import { useNavigate } from "react-router";

interface IOption {
  name: string;
  path: string;
  isSelected: boolean;
}

export function Header() {
  const navigate = useNavigate();

  const [options, setOptions] = useState<IOption[]>([
    {
      name: "Movies",
      path: "/movies",
      isSelected: true,
    },
  ]);

  function buildHeaderOption() {
    return options.map((option, index) => (
      <HeaderOption
        key={index}
        isSelected={option.isSelected}
        onClick={() => handleNavigation(option)}
      >
        {option.name}
      </HeaderOption>
    ));
  }

  function handleNavigation({ path, name }: IOption) {
    const newOptions = [...options];
    newOptions.forEach((option) => (option.isSelected = option.name === name));
    setOptions([...newOptions]);

    navigate(path);
  }

  return (
    <Container>
      <HeaderLogo src={logo}></HeaderLogo>
      <HeaderOptionsWrapper>
        <HeaderOptions>{buildHeaderOption()}</HeaderOptions>
      </HeaderOptionsWrapper>
    </Container>
  );
}
