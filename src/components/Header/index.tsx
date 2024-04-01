import React from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { MagnifyingGlass } from "phosphor-react";

import logoMeli from '../../assets/meli_logo.png'
import styles from "./header.module.scss";
import { useEffect, useState } from 'react';

export function Header() {

  const location = useLocation();
  
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const q = searchParams.get("q");
    (q && q != '') ? setSearch(q) : setSearch("");
  }, [location])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    search && search.length > 0 && event.currentTarget.submit();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <header>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logoLink}><img src={logoMeli}  /></NavLink>
        <form action="/products" onSubmit={handleSubmit}>
          <input
            type="text"
            name="q"
            value={search}
            onChange={handleSearchChange}
            placeholder="Pesquisa alguma coisa aqui vai?"
            autoComplete="off"
          />
          <button type="submit"><MagnifyingGlass /></button>
        </form>
      </div>
    </header>
  );
}
