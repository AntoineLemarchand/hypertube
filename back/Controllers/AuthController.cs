using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> _logger;

    public AuthController(ILogger<AuthController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "login")]
    public IEnumerable<String> Get()
    {
      return new string[] { "value1", "value2" };
    }
}
