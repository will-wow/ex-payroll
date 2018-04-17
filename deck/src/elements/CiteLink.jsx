import React from 'react';

import { Link } from 'spectacle';

export default function CiteLink({ href }) {
  return (
    <Link href={href} textSize="14px">
      {href}
    </Link>
  );
}
