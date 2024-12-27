<?php
$directory = "C:\Users\dcast\OneDrive\Desktop\wepage"; // Replace this with the path to your directory

if (is_writable($directory)) {
    echo "The directory is writable.";
} else {
    echo "The directory is not writable. Please check the permissions.";
}
?>
