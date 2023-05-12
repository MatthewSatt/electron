async function func() {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }

  func()
