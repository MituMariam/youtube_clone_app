import React from 'react'
import styled from "styled-components";
import Card from '../components/Card';


const Container = styled.div`
display: flex;
 flex-flow: row wrap;
  justify-content: space-between;
  /* padding:0 20px; */
`;


const Home = () => {
  return (
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
  )
}

export default Home