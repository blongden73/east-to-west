<!DOCTYPE html>
<html>

  {% include head.html %}

  <body class="{{page.title | handleize | downcase}}">

    {% include header.html %}

        {{ content }}

    {% include footer.html %}

  </body>

</html>
