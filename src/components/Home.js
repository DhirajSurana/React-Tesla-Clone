import React from 'react'
import styled from "styled-components"
import Section from "./Section"

// const details = [
//   {
//     "title": "Model S",
//     "description": "Order Online for Touchless Delivery",
//     "image": "model-s.jpg"
//   },
//   {
//     "title": "Model 3",
//     "description": "Order Online for Touchless Delivery",
//     "image": "model-3.jpg"
//   },
//   {
//     "title": "Model X",
//     "description": "Order Online for Touchless Delivery",
//     "image": "model-x.jpg"
//   },
//   {
//     "title": "Model Y",
//     "description": "Order Online for Touchless Delivery",
//     "image": "model-y.jpg"
//   }
// ]

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost solar panel in america"
        description="Money-back guarantee"
        image="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        image="solar-roof.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Accessories"
        description=""
        image="accessories.jpg"
        leftBtnText="Custom order"
        rightBtnText=""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;
`

