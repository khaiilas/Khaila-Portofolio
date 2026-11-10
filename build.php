<?php

// Tentukan folder utama project
$root = __DIR__;
$output = $root . '/dist';

// Hapus folder dist lama jika tersedia
if (is_dir($output)) {
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator(
            $output,
            FilesystemIterator::SKIP_DOTS
        ),
        RecursiveIteratorIterator::CHILD_FIRST
    );

    foreach ($files as $file) {
        $file->isDir()
            ? rmdir($file->getPathname())
            : unlink($file->getPathname());
    }

    rmdir($output);
}

// Buat folder dist
mkdir($output, 0777, true);

// Ubah PHP menjadi HTML
chdir($root);

ob_start();
include $root . '/index.php';
$html = ob_get_clean();

file_put_contents($output . '/index.html', $html);

// Salin folder assets
function copyFolder($source, $destination)
{
    if (!is_dir($source)) {
        return;
    }

    if (!is_dir($destination)) {
        mkdir($destination, 0777, true);
    }

    $items = scandir($source);

    foreach ($items as $item) {
        if ($item === '.' || $item === '..') {
            continue;
        }

        $src = $source . '/' . $item;
        $dst = $destination . '/' . $item;

        if (is_dir($src)) {
            copyFolder($src, $dst);
        } else {
            copy($src, $dst);
        }
    }
}

copyFolder($root . '/assets', $output . '/assets');

echo "Website berhasil dikonversi ke folder dist!";
