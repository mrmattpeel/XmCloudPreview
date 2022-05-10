using GraphQL.Types;
using Sitecore.Services.GraphQL.Schemas;
using System.Collections.Generic;

namespace Jet2.Feature.POC.Api.Email
{
    public class CheckEmailExists : SchemaProviderBase
    {
        public override IEnumerable<FieldType> CreateRootQueries()
        {
            yield return new CheckEmailQuery();
        }
    }
}