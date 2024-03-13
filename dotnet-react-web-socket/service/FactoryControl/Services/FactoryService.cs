using FactoryControl.Data;
using FactoryControl.Dto;
using FactoryControl.Hub;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace FactoryControl.Services
{
    public interface IFactoryService
    {
        void UpdateFactory(FactoryDto.Update update);
        void AddFactory(int dynamicValue);
	}

    public class FactoryService : IFactoryService
    {

        WebSocketHub _webSocketHub;
        public FactoryService(WebSocketHub webSocketHub)
        {
            _webSocketHub = webSocketHub;
        }

        public void UpdateFactory(FactoryDto.Update update)
        {
            try
            {
                SampleData.Factory factory = SampleData.FactoryList.FirstOrDefault(w => w.Id == update.Id);
                if (factory == null) throw new ArgumentNullException();

                var datetime = new DateTime();
                factory.Timestamp = datetime.ToString();
                factory.Price = update.Price;
                factory.Message = update.Message;

                var x = SampleData.FactoryList;

                // if a factory updated, send new data to all sockets
                _ = _webSocketHub.SendAll(JsonConvert.SerializeObject(SampleData.FactoryList));
            }
            catch (Exception exp)
            {
                //log exp
            }
        }
		public void AddFactory(int dynamicValue)
		{
			try
			{
				SampleData.Factory factory = new SampleData.Factory();
				var datetime = DateTime.Now;
				factory.Id = dynamicValue;
				factory.Timestamp = datetime.ToString("yyyy-MM-dd HH:mm:ss");
				factory.Price =100+ dynamicValue;
				factory.Message ="message";

				SampleData.FactoryList.Add(factory);

				// if a factory updated, send new data to all sockets
				_ = _webSocketHub.SendAll(JsonConvert.SerializeObject(SampleData.FactoryList));
			}
			catch (Exception exp)
			{
				//log exp
			}
		}

	}
}
