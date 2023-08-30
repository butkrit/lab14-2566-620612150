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
import { useState } from "react";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={2} size="lg" value={value} onChange={setValue} />

      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt="xs"
        minRows={3}
      />

      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text align="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text align="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination mt="md" color="orange" total={20} position="center" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Thanakrit Yokart 620612150
      </Text>
    </Container>
  );
}
