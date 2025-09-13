#!/bin/bash

# Add "use client" directive to all page components
for file in src/app/**/page.tsx; do
  if ! grep -q "^\"use client\"" "$file"; then
    echo "\"use client\"\n\n$(cat $file)" > "$file"
  fi
done
