using GraphQL.Types;

namespace Jet2.Feature.POC.Api.Email
{
    /// <summary>
    /// Map the DTO to a GraphQL type
    /// </summary>
    public class CheckEmailGraphType : ObjectGraphType<CheckEmailResponse>
    {
        public CheckEmailGraphType()
        {
            Name = "CheckEmailNotInUse";

            Field<NonNullGraphType<BooleanGraphType>>("emailAlreadyInUse", resolve: context => context.Source.EmailAlreadyInUse);
        }
    }
}