"use client";
import {
  Container,
  Text,
  Title,
  Group,
  Rating,
  Textarea,
  Button,
  Stack,
  Divider,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt={"sm"}>
        Your rating
      </Title>
      <Rating size="lg" />

      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt={"xs"}
        minRows={3}
      />

      <Button mt={"xs"} color="orange">
        Submit Review
      </Button>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly></Rating>
      </Group>
      <Text align="center" fz="md" color="gray">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly></Rating>
      </Group>
      <Text align="center" fz="md" color="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination
        mt={"md"}
        position="center"
        color="orange"
        total={20}
      ></Pagination>

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Thanakrit Yokart 620612150
      </Text>
    </Container>
  );
}
