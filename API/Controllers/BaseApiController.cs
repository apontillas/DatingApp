using API.Data;
using API.Entities;
using API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")]

    public class BaseApiController : ControllerBase
    {
        
    }
}