import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section 
        id="1"
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        icon="1"
      />
      <Section
        id="2"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        icon=""
      />
      <Section
        id="3"
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        icon=""
      />
      <Section
        id="4"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        icon=""
      />
      <Section
        id="5"
        title="Lowest Cost solar panel in america"
        description="Money-back guarantee"
        image="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        icon=""
      />
      <Section
        id="6"
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        image="solar-roof.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        icon=""
      />
      <Section
        title="Accessories"
        description=""
        image="accessories.jpg"
        leftBtnText="Custom order"
        rightBtnText=""
        icon=""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;
`

