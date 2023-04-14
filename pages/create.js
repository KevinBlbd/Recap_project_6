import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();

  async function addPlace(place) {
    const response = await fetch("/api/places", {
      method: "POST",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  }

  // if (request.method === "POST") {
  //   try {
  //     const spotData = request.body;
  //     await Spot.create(spotData);

  //     response.status(201).json({ status: "Spot created" });
  //   } catch (error) {
  //     console.log(error);
  //     response.status(400).json({ error: error.message });
  //   }
  // }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
