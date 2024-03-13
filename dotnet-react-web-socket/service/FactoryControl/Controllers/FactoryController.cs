using FactoryControl.Dto;
using FactoryControl.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;

namespace FactoryControl.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FactoryController : ControllerBase
    {
        private IFactoryService _factoryService;
		private Timer _dynamicValueTimer;
		public FactoryController(IFactoryService factoryService)
        {
            _factoryService = factoryService;
			_dynamicValueTimer = new Timer(AddDynamicValue, null, TimeSpan.Zero, TimeSpan.FromSeconds(1));
		}

        [HttpPost("Update")]
        public IActionResult Update(FactoryDto.Update update)
        {
            try
            {
                _factoryService.UpdateFactory(update);
                return Ok();
            }
            catch (Exception exp)
            {
                return BadRequest();
            }
        }

		// Method to be called by the timer every 2 seconds
		private void AddDynamicValue(object state)
		{
			try
			{
				// Add your dynamic value creation logic here
				// For example, you can generate a random value or fetch it from an external source
				var dynamicValue = GenerateDynamicValue();

				// Update the factory service with the dynamic value
				_factoryService.AddFactory(dynamicValue);
			}
			catch (Exception exp)
			{
				// Log or handle the exception as needed
			}
		}
		// Example method for generating a dynamic value
		private int GenerateDynamicValue()
		{
			// Replace this with your actual logic to generate a dynamic value
			Random random = new Random();
			return random.Next(1, 100);
		}

	}
}
