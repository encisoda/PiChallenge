
using Microsoft.AspNetCore.Http;
using WebApi.Helpers;
using AutoMapper;
using WebApi.Authorization;
using WebApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;


namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CocktailsController : ControllerBase
    {

        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public CocktailsController(
        IMapper mapper,
        IOptions<AppSettings> appSettings)
        {
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [HttpGet("name/{name}")]
        public async Task<String> GetCocktailsByName(string name)
        {
            var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;
            using (var httpClient = new HttpClient())
            {
                var responde = await httpClient.GetAsync(url);
                return await responde.Content.ReadAsStringAsync();
            }


        }

        [HttpGet("{id}")]
        public async Task<String> GetCocktailsById(int id)
        {
            var url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
            using (var httpClient = new HttpClient())
            {
                var responde = await httpClient.GetAsync(url);
                return await responde.Content.ReadAsStringAsync();
            }


        }

    }
}
