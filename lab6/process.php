<?php
include("headerM.php");
?>
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="utf-8">
    <title>Chapter 12</title>

    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <div class="results">
        <p>
            <label class="results__label">Title</label>
            <span><?php echo $_POST["title"]; ?></span>
        </p>
        <p>
            <label class="results__label">Description</label>
            <span><?php echo $_POST["description"]; ?></span>
        </p>
        <p>
            <label class="results__label">Genre</label>
            <span><?php echo $_POST["genre"]; ?></span>
        </p>
        <p>
            <label class="results__label">Subject</label>
            <span><?php echo $_POST["subject"]; ?></span>
        </p>
        <p>
            <label class="results__label">Star</label>
            <span><?php echo $_POST["Star"]; ?></span>
        </p>
        <p>
            <label class="results__label">Year</label>
            <span><?php echo $_POST["year"]; ?></span>
        </p>
        <p>
            <label class="results__label">Production</label>
            <span><?php echo $_POST["Production"]; ?></span>
        </p>





    </div>
    <div class="resolve__caption">
        Movie Information Saved
    </div>

    <?php
    include("footerM.php");
    ?>
</body>