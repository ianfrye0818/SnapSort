import React from 'react';
import { db } from '@/db';
import { testing } from '@/db/schema';

export default async function page() {
  const data = await db.query.testing.findMany();

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
