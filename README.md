jquery-notify.js
================

Bootstrap 3 alert and help-block library


## Usage

```html
<html>

<body>
  <div id="notify-div" class="alert alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert">
      <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
    </button>
    <div class="alert-content"></div>
  </div>
  
  <div class="body">
    ...
    ...
    <div class="form-group">
      <label for="your_name" class="control-label">Your name</label>
      <div>
        <input type="text" id="your_name" name="your_name" class="form-control">
      </div>
    </div>
    ...
    ...
  </div>

</body>

</html>

```

```javascript

<script>

var $notify = new $.notify('#notify-div');

// var $notify = new $.notify('#notify-div', { showBefore: 'div.body' });

$notify.info('<strong>Hello!</strong><br/>How are you today?');

$('#your_name').on('blur', function() {
  var $this = $(this);
  if ($this.text == '') {
    $notify.setError($this, 'Please enter your name.');
  }
}

</script>


```
