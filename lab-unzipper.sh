#!/bin/sh

zipfile="$1"
file="$2"

dir="${zipfile%.zip}"

dir=$(unzip -Z1 "$zipfile" | grep / | head -n1 | cut -d/ -f1) &&
unzip "$zipfile" >/dev/null 2>&1 &&
mv "$file" "$dir"/ &&
rm "$zipfile"

echo "Se ha descomprimido en $dir y se ha movido $file."
